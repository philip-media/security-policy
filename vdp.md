<p align="center">
<img src="https://raw.githubusercontent.com/philip-media/security-policy/main/pmd.svg" alt="philip.media" width="250" align="center">
</p>

# philip.media Vulnerabilty Disclosure Policy

## Table of contents

- [Testing for vulnerabilities](#testing-for-vulnerabilties)
- [How to test](#how-to-test)
- [Creating a report](#creating-a-report)

## Testing for vulnerabilities
Everyone is welcome to test our products against known or new vulnerabilities. 
Please conduct to the following guidelines on how to test and what to avoid, before performing your tests and reporting a vulnerability you have found. 

## How to test
You may test any philip.media product against any vulnerability but:
- Vulnerabilities which could affect the availability of the service (DDoS, DoS, BF-Attack)
- Accessing personal data protected under the GDPR or other privacy acts. If you find a vulnerability like this, please do not access the data but instead proceed to report the vulnerability directly.
- Peramently damaging a service (e.g. deleting databases and/or also deleting backup-servers)
- Automated testing - Please do not perform any tests with a bot/automated.

## Creating a report
### Correct report format
We'd like to encourage you to use the following table-format if you send us a vulnerability report, as this is the easiest way for us to reproduce the vulnerability and start fixing it: 

|           	|                                                           	|
|--------------------------------	|-----------------------------------------------------------------------------	|
| Security Researcher:           	| Your name, Company                                                          	|
| Security Researcher URI:       	| e.g. https://yourdomain.com                                                 	|
| Security Researcher Mail:      	| e.g. you@yourdomain.com                                                     	|
| Seucirts Researcher PGP:       	| optional - Your PGP-fingerprint                                             	|
| Affected service(s):           	| e.g. VeganCheck.me                                                          	|
| Vulnerability:                 	| Short description of the vulnerability                                      	|
| Vulnerability URI:             	| optional - If the vulnerability is already published, please provide a link 	|
| Steps to reproduce:            	|                                                                             	|
| Affected systems:              	| Only if applicable and known - e.g. APACHE, NGINX                           	|
| Affected OS:                   	| Only if applicable and known - e.g. Linux RHEL 7.8, Mac OS 12.0.1           	|
| Affected browsers:             	| Only if applicable and known - e.g. Chrome Canary 92.0.4498.0               	|
| Date of discovery:             	| 18/12/2021                                                                  	|
| Additional information:        	|                                                                             	|
| Full vunerability description: 	|                                                                             	|
