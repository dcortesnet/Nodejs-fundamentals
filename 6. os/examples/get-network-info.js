const os = require('os');

const networkInfo = os.networkInterfaces();

console.log(networkInfo);

/**
{
  'vEthernet (Default Switch)': [
    {
      address: 'fe80::5f00:69c2:bb8b:29e8',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:15:5d:5e:a1:77',
      internal: false,
      cidr: 'fe80::5f00:69c2:bb8b:29e8/64',
      scopeid: 84
    },
    {
      address: '172.28.144.1',
      netmask: '255.255.240.0',
      family: 'IPv4',
      mac: '00:15:5d:5e:a1:77',
      internal: false,
      cidr: '172.28.144.1/20'
    }
  ],
  'Wi-Fi': [
    {
      address: 'fe80::bbcb:4a3f:fc57:644',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '4e:4a:b2:2a:10:71',
      internal: false,
      cidr: 'fe80::bbcb:4a3f:fc57:644/64',
      scopeid: 3
    },
    {
      address: '192.168.100.8',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '4e:4a:b2:2a:10:71',
      internal: false,
      cidr: '192.168.100.8/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
 */