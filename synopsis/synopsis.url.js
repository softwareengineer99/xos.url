URL=require('../../xos.url')
url='https://user:password@sub.domain.com:1337/path/to/folder/file.extension?para=value&para2=value2&user[name]=myusername&user[password]=mypassword&another[nested][object][key]=nestedobjectvalue#anchor&anchorpart'
u=new URL(url)
console.log(u.parsed)
