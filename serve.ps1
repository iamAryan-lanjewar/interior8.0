# Lightweight Local Development & Preview Web Server for RK Interior
$Port = 5173
$RootPath = Join-Path $PSScriptRoot "dist"

if (-not (Test-Path $RootPath)) {
    $RootPath = $PSScriptRoot
}

$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add("http://localhost:$Port/")
$Listener.Prefixes.Add("http://127.0.0.1:$Port/")

try {
    $Listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Local preview server is running live at:               " -ForegroundColor Cyan
    Write-Host "  👉 http://localhost:$Port/                             " -ForegroundColor Yellow
    Write-Host "  👉 http://127.0.0.1:$Port/                             " -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Green
} catch {
    Write-Error "Failed to start listener on port $($Port): $_"
    exit 1
}

$MimeTypes = @{
    ".html" = "text/html"
    ".htm"  = "text/html"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".mjs"  = "application/javascript"
    ".json" = "application/json"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".webp" = "image/webp"
    ".ico"  = "image/x-icon"
    ".xml"  = "application/xml"
    ".txt"  = "text/plain"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

while ($Listener.IsListening) {
    try {
        $Context = $Listener.GetContext()
        $Request = $Context.Request
        $Response = $Context.Response

        $UrlPath = [System.Uri]::UnescapeDataString($Request.Url.AbsolutePath)
        if ($UrlPath -eq "/" -or [string]::IsNullOrWhiteSpace($UrlPath)) {
            $UrlPath = "/index.html"
        }

        $LocalFile = [System.IO.Path]::Combine($RootPath, $UrlPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar))

        if (-not (Test-Path $LocalFile -PathType Leaf)) {
            # SPA fallback to index.html
            $LocalFile = [System.IO.Path]::Combine($RootPath, "index.html")
        }

        if (Test-Path $LocalFile -PathType Leaf) {
            $Extension = [System.IO.Path]::GetExtension($LocalFile).ToLower()
            $ContentType = $MimeTypes[$Extension]
            if (-not $ContentType) {
                $ContentType = "application/octet-stream"
            }

            $Response.ContentType = $ContentType
            $Response.Headers.Add("Access-Control-Allow-Origin", "*")

            if ($UrlPath.StartsWith("/assets/")) {
                $Response.Headers.Add("Cache-Control", "public, max-age=31536000, immutable")
            } else {
                $Response.Headers.Add("Cache-Control", "no-cache, must-revalidate")
            }

            $Bytes = [System.IO.File]::ReadAllBytes($LocalFile)
            $Response.ContentLength64 = $Bytes.Length
            $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
        } else {
            $Response.StatusCode = 404
            $ErrorMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $Response.ContentLength64 = $ErrorMsg.Length
            $Response.OutputStream.Write($ErrorMsg, 0, $ErrorMsg.Length)
        }

        $Response.OutputStream.Close()
    } catch {
        # Log and continue serving other requests
        Write-Host "Request error: $_"
    }
}
