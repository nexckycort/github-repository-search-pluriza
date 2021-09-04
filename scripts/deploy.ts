import ghpages from 'gh-pages'
import colors from 'colors'
import path from 'path'

const deploy = async () => {
  ghpages.publish(path.resolve(__dirname, '../build'), {
    branch: 'deploy',
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/nexckycort/github-repository-search-pluriza.git',
    silent: true
  })
  console.log(colors.bold.italic.green('published branch'))
}

deploy()
