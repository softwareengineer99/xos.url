## Usage
Simply require and instantiate a URL
```javascript
URL=require('../../xos.url')
url='https://user:password@sub.domain.com:1337/path/to/folder/file.extension?para=value&para2=value2&user[name]=myusername&user[password]=mypassword&another[nested][object][key]=nestedobjectvalue#anchor&anchorpart'
u=new URL(url)
console.log(u.parsed)
```

## output
Output of the above snippet is:
```javascript
  { source: 'https://user:password@sub.domain.com:1337/path/to/folder/file.extension?para=value&para2=value2&user[name]=myusername&user[password]=mypassword&another[nested][object][key]=nestedobjectvalue#anchor&anchorpart',
  protocol: 'https',
  authority: 'user:password@sub.domain.com:1337',
  credentials: 'user:password',
  username: 'user',
  password: 'password',
  host: 'sub.domain.com',
  port: '1337',
  relative: '/path/to/folder/file.extension?para=value&para2=value2&user[name]=myusername&user[password]=mypassword&another[nested][object][key]=nestedobjectvalue#anchor&anchorpart',
  path: '/path/to/folder/file.extension',
  directory: '/path/to/folder/',
  file: 'file.extension',
  query_string: 'para=value&para2=value2&user[name]=myusername&user[password]=mypassword&another[nested][object][key]=nestedobjectvalue',
  anchor: 'anchor&anchorpart',
  query: 
  { para: 'value',
   para2: 'value2',
   user: { name: 'myusername', password: 'mypassword' },
   another: { nested: [Object] } } }
```