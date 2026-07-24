import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const logoMap = [
  {
    name: 'mckinsey',
    url: 'https://media.licdn.com/dms/image/v2/D4E0BAQHUYDHTOOXs9w/company-logo_100_100/B4EZ8eP9xVIkAI-/0/1782918929735/mckinsey_logo?e=1786579200&v=beta&t=qbY_pGC7vqkCIOgVJgPhvbyHZ4MaNfvzjMYs_SHPIWs'
  },
  {
    name: 'aspire-institute',
    url: 'https://media.licdn.com/dms/image/v2/D4E0BAQFMttlyatjAKQ/company-logo_100_100/company-logo_100_100/0/1683218290650/aspire_leaders_program_logo?e=1786579200&v=beta&t=tjXBnf2geWF_GlG7gModm8w6OtaFaRBM8XXNETQsKl4'
  },
  {
    name: 'cgc',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQEa4nPszALypw/img-crop_100/B56Zg7llznHMAM-/0/1753346367905?e=1786579200&v=beta&t=3LmZuq1HO-uZoLCzDxCT3U8PKn5sh4SM2T3m06bymEI'
  },
  {
    name: 'cmx',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQFfqPbOkLGlCw/company-logo_100_100/B56ZlZHsM4J4AU-/0/1758136812983/cmx_media_logo?e=1786579200&v=beta&t=5Raz2r4l1WM1qs4xeLRGkYTa3demA-nOZ_RO-ErJvvg'
  },
  {
    name: 'cmx-academy',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQFfqPbOkLGlCw/company-logo_100_100/B56ZlZHsM4J4AU-/0/1758136812983/cmx_media_logo?e=1786579200&v=beta&t=5Raz2r4l1WM1qs4xeLRGkYTa3demA-nOZ_RO-ErJvvg'
  },
  {
    name: 'community-collective',
    url: 'https://media.licdn.com/dms/image/v2/C4D0BAQH9-PIvDHo2gw/company-logo_100_100/company-logo_100_100/0/1630475780363?e=1786579200&v=beta&t=O6Sl-BYAFV51whCXwmD33PWzsqJJR-ttLluSt_wtXi8'
  },
  {
    name: 'blockon-ventures',
    url: 'https://media.licdn.com/dms/image/v2/C4D0BAQH4UL-D3GYNKQ/company-logo_100_100/company-logo_100_100/0/1674690465402?e=1786579200&v=beta&t=9ya31L-uA4GHnbQyXeLL65J6Q9fBptoH-DA1-WiYybk'
  },
  {
    name: 'association-cyber-security',
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQGUq50mv1yLpw/company-logo_100_100/company-logo_100_100/0/1698501277262?e=1786579200&v=beta&t=BIIQvX4DP03LIBnbjTiG5tJkV5_elmhP91cwWUmVUk8'
  },
  {
    name: 'udacity',
    url: 'https://media.licdn.com/dms/image/v2/C560BAQHiNYfm0YHKrg/company-logo_100_100/company-logo_100_100/0/1656621848677/udacity_logo?e=1786579200&v=beta&t=E5wulSkL5jGzWRPkip9pmYqUR_j1hQJGgfKZXlQokPk'
  },
  {
    name: 'propeers',
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQHPsTzBSHs9Rg/company-logo_100_100/company-logo_100_100/0/1692272718515?e=1786579200&v=beta&t=a6bJQdhlwRpY4ByOkVgdOZy31H9V_rC3aJC4iZxbtVA'
  },
  {
    name: 'girls-leading-tech',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQGWy1Y61vfU1A/company-logo_100_100/B56Zy3CigmHQAY-/0/1772597424469/girlsleadingtech_logo?e=1786579200&v=beta&t=r305lCwamd1uY5ChlaiDJxNhOBDyBZX_HmgzjSzxE8E'
  },
  {
    name: 'lamit-club',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQGkQDN2ypXb0g/company-logo_100_100/B56Zndf9sjIYAQ-/0/1760357768828/letz_connect_logo?e=1786579200&v=beta&t=KYF1QUhnrJfDCqF9JLbR8AiFSQQhb4N9efF2Qxz_SdI'
  },
  {
    name: 'letz-connect',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQGkQDN2ypXb0g/company-logo_100_100/B56Zndf9sjIYAQ-/0/1760357768828/letz_connect_logo?e=1786579200&v=beta&t=KYF1QUhnrJfDCqF9JLbR8AiFSQQhb4N9efF2Qxz_SdI'
  },
  {
    name: 'shebuilds',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQE3_mF30h9q_w/company-logo_100_100/company-logo_100_100/0/1731229537037/shebuildshack_logo?e=1786579200&v=beta&t=IzodRIvToWHgLXngiInpzr6wj0DKzrpNYWBpe8NOagk'
  },
  {
    name: 'cncf-jalandhar',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQHpwgcjxO-43A/company-logo_100_100/company-logo_100_100/0/1697620728965/cncfjalandhar_logo?e=1786579200&v=beta&t=DfX_dBOjO1kLeypJMEoVX3ie6jINOT30AkA_MdEo4Ng'
  },
  {
    name: 'google-cloud',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQFV-ds_iFfVSQ/company-logo_100_100/company-logo_100_100/0/1698660876286?e=1786579200&v=beta&t=B93mRIzIFj1n_2HSsDpTK--kjo3xvqRY6RTNGjqaNwg'
  },
  {
    name: 'thm-chandigarh',
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQG-ovMCBvY34w/company-logo_100_100/company-logo_100_100/0/1713473428298?e=1786579200&v=beta&t=v3OxcBnFgvthRTqGCkT2oKIjACWzP_Zn-pCxBqjMAAg'
  },
  {
    name: 'tpg-chandigarh',
    url: 'https://media.licdn.com/dms/image/v2/C560BAQHBJGxVbpYzPw/company-logo_100_100/company-logo_100_100/0/1668013454590/the_phoenix_guild_logo?e=1786579200&v=beta&t=e1jOUlGDEp-nUN072PWTaG-DQI2QZOVwWvx8gHPLIWc'
  },
  {
    name: 'socrates-global',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQGMN29VwMO-JQ/company-logo_100_100/company-logo_100_100/0/1699208744035/socrates_global_logo?e=1786579200&v=beta&t=PlvcqWC8r6cUGXjLi14WbzzNvHMcR6bAbs79nVtmaFU'
  },
  {
    name: 'hack-for-bloom',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQGI6EpsBGe1eQ/company-logo_100_100/B56ZyU0UAqGoAQ-/0/1772023268028/builarclabs_logo?e=1786579200&v=beta&t=gcF_sgy9p7PRzRyrVO5M1iTBT8vPdzQJJqpXcf45-A0'
  },
  {
    name: 'ibw',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQFrPCUf12Qnjw/company-logo_100_100/B56Zz1gLNWKYAU-/0/1773645379544/ibwofficial_logo?e=1786579200&v=beta&t=8d9vTPoTH7kRjnMjUAhAiwHcOkE8YoA4hPDtOTs7iIo'
  },
  {
    name: 'web3conf-goa',
    url: 'https://media.licdn.com/dms/image/v2/C4D0BAQG2U2-SNRRupA/company-logo_100_100/company-logo_100_100/0/1653967293131?e=1786579200&v=beta&t=vVu7qMObfkZ4RuUt0Ijjh8vcVG1CTU7OXkEx0B201Ng'
  },
  {
    name: 'kotlin-conf',
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQENNp8ZB1AWgg/company-logo_100_100/company-logo_100_100/0/1707854220510?e=1786579200&v=beta&t=FZnLINhCdPnjsSyfw3d6l77a3IyEDKiecJ0FPXjVQQ4'
  },
  {
    name: 'outdefine',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQGqJvyvm6N5ng/company-logo_100_100/B56Z3WKuk6J0AU-/0/1777414629944/outdefine_logo?e=1786579200&v=beta&t=AFgvfTtHwN56J-Vq-50ogn3X3IsnY4dcsqpdgdahhv8'
  },
  {
    name: 'devrel-uni',
    url: 'https://media.licdn.com/dms/image/v2/C4E0BAQE6mz65GaYXDw/company-logo_100_100/company-logo_100_100/0/1676901162651?e=1786579200&v=beta&t=bxs5RvRR7wxp51ixfNHlZmpYV3A8ONOoOlrB7l9oHHE'
  },
  {
    name: 'gdg-cloud-chandigarh',
    url: 'https://media.licdn.com/dms/image/v2/C4D0BAQGb5KXVvevThg/company-logo_100_100/company-logo_100_100/0/1675351211707?e=1786579200&v=beta&t=3-WvgWV_kQy2HfQX_iuaKeJfzAmqMHz2PxdihR2V1RY'
  },
  {
    name: 'gdg-on-campus-cgc',
    url: 'https://media.licdn.com/dms/image/v2/C4D0BAQGb5KXVvevThg/company-logo_100_100/company-logo_100_100/0/1675351211707?e=1786579200&v=beta&t=3-WvgWV_kQy2HfQX_iuaKeJfzAmqMHz2PxdihR2V1RY'
  },
  {
    name: 'police-dav-public-school',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQEptQjber132A/company-logo_100_100/company-logo_100_100/0/1705057470649?e=1786579200&v=beta&t=-pvJYngqpsUU31LMxTUI7nS5MZXAiFAk7M49GG0roEg'
  }
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, filePath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const item of logoMap) {
    const filePath = path.join(targetDir, `${item.name}.png`);
    try {
      await download(item.url, filePath);
      console.log(`Downloaded ${item.name} successfully`);
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }
}

main();
