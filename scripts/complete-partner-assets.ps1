$ErrorActionPreference = 'Stop'
$partnerDir = Join-Path $PSScriptRoot '../public/rise-seg/partners'
$downloads = @(
  @{ file='bradesco.png'; url='https://infinitycorretora.com.br/wp-content/uploads/2026/01/logo-bradesco-v2.png' },
  @{ file='hapvida.png'; url='https://www2.hapvida.com.br/image/layout_set_logo?img_id=12975833' },
  @{ file='azul.svg'; url='https://www.azulseguros.com.br/wp-content/uploads/2022/07/azul-seguros.svg' },
  @{ file='unimed.png'; url='https://www.unimed.coop.br/site/image/layout_set_logo?img_id=70667720' },
  @{ file='careplus.svg'; url='https://www.careplus.com.br/assets/svg/Logotipo-Care_Plus.svg' },
  @{ file='hdi.png'; url='https://www.hdiseguros.com.br/assets/portal/img/sofia/logo-hdi.png' }
)
$downloads | ForEach-Object -Parallel {
  try { Invoke-WebRequest -Uri $_.url -OutFile (Join-Path $using:partnerDir $_.file) -TimeoutSec 25; Write-Output ('OK '+$_.file) }
  catch { Write-Output ('FAILED '+$_.file+': '+$_.Exception.Message) }
} -ThrottleLimit 7
$inline = @(
  @{ file='prevent-senior.svg'; url='https://www.preventsenior.com.br/'; label='Prevent Senior' },
  @{ file='akad.svg'; url='https://akadseguros.com.br/'; label='Logo Akad' }
)
foreach ($item in $inline) {
  $html = (Invoke-WebRequest -Uri $item.url -TimeoutSec 25).Content
  $pattern = '<svg\b[^>]*aria-label="'+[regex]::Escape($item.label)+'"[\s\S]*?</svg>'
  $match = [regex]::Match($html, $pattern)
  if (!$match.Success) { throw ('Logo não encontrada: '+$item.label) }
  [System.IO.File]::WriteAllText((Join-Path $partnerDir $item.file), $match.Value)
  Write-Output ('OK '+$item.file)
}
# Omint's official white logo is bundled from its rendered public website:
# https://www.omint.com.br/wp-content/themes/OmintPortal360/assets/images/img/logo-header-blue-dois.webp
