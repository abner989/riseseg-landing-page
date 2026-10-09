$ErrorActionPreference = 'Stop'
$assetRoot = Join-Path $PSScriptRoot '../public/rise-seg'
$partnerDir = Join-Path $assetRoot 'partners'
$fontDir = Join-Path $assetRoot 'fonts'
New-Item -ItemType Directory -Force -Path $partnerDir, $fontDir | Out-Null
$downloads = @(
  @{ file='partners/porto.svg'; url='https://portoseguro.cdn.prismic.io/portoseguro/aScbuWGnmrmGqW3T_porto-logo.svg' },
  @{ file='partners/amil.png'; url='https://infinitycorretora.com.br/wp-content/uploads/2025/12/Operadora-Amil-Infinity-Corretora.png' },
  @{ file='partners/sulamerica.png'; url='https://portal.sulamericaseguros.com.br/assets/logo-sula130.png' },
  @{ file='partners/notredame.png'; url='https://infinitycorretora.com.br/wp-content/uploads/2026/01/logo-notredame.png' },
  @{ file='partners/hapvida.png'; url='https://www2.hapvida.com.br/image/layout_set_logo?img_id=12975833' },
  @{ file='partners/alice.svg'; url='https://cdn.prod.website-files.com/5fd0f5e4883524ed0fc88323/69c6cc6dc235f0ed9c51c7e3_Logo.svg' },
  @{ file='partners/seguros-unimed.png'; url='https://midias.segurosunimed.com.br/content/Seguros-Unimed_combox-compinheiro.png' },
  @{ file='partners/unimed-jundiai.png'; url='https://www.unimed.coop.br/site/image/layout_set_logo?img_id=21163655' },
  @{ file='partners/unimed-campinas.png'; url='https://d24ux3x5lhpqgy.cloudfront.net/assets/images/logo/logo-unimed-campinas.png' },
  @{ file='partners/trasmontano.png'; url='https://www.trasmontano.com.br/Images/Logo/logo-trasmontano-small.png' },
  @{ file='partners/medsenior.png'; url='https://medsenior.com.br/wp-content/uploads/2025/08/logo-medsenior-2025-scaled.png' },
  @{ file='partners/tokio.png'; url='https://www.tokiomarine.com.br/documents/d/guest/logo' },
  @{ file='partners/suhai.svg'; url='https://suhaiseguradora.com/wp-content/uploads/2026/07/logo-suhai-dark-1.svg' },
  @{ file='partners/mapfre.png'; url='https://www.mapfre.com.br/media/logo-mapfre.png' },
  @{ file='partners/metlife.png'; url='https://www.metlife.com.br/content/dam/metlifecom/global/icons-header/metlife_logo.png' },
  @{ file='partners/hdi.png'; url='https://www.hdiseguros.com.br/assets/portal/img/sofia/logo-hdi.png' },
  @{ file='partners/allianz.png'; url='https://infinitycorretora.com.br/wp-content/uploads/2026/01/logo-allianz.png' },
  @{ file='partners/yelum.svg'; url='https://www.yelumseguros.com.br/SiteAssets/img/logo-cia-primary.svg' },
  @{ file='fonts/dm-sans-400.ttf'; url='https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTg.ttf' },
  @{ file='fonts/dm-sans-600.ttf'; url='https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJthTg.ttf' },
  @{ file='fonts/manrope-600.ttf'; url='https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F.ttf' },
  @{ file='fonts/manrope-700.ttf'; url='https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf' }
)
$downloads | ForEach-Object -Parallel {
  try { Invoke-WebRequest -Uri $_.url -OutFile (Join-Path $using:assetRoot $_.file) -TimeoutSec 25; Write-Output ('OK ' + $_.file) }
  catch { Write-Output ('FAILED ' + $_.file + ': ' + $_.Exception.Message) }
} -ThrottleLimit 7
