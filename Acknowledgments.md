<p align="center">
<img src="https://raw.githubusercontent.com/philip-media/security-policy/main/pmd.svg" alt="philip.media" width="250" align="center">
</p>

# Responsible vulnerability disclosure acknowledgements

philip.media would like to thank the following security researchers, who have reported vulnerabilities to us as part of a Responsible Disclosure Procedure:

## 2022

| Name of Researcher 	| Vulnerability                	| Conformity 	| Fixed 	| CVE | Affected services | Risk level |
|--------------------	|------------------------------	|------------	|-------	|----- |----|----|
|Parshwa Bhavsar    	| Unauthorized REST-API Access (WP) 	| False       	| True  	| CVE-2017-5487 | All WP instances | <img src="https://cldsi.de/bot/vuln/medium.svg" height="30"> 
| Gaurang Maheta     	| Deprecated SSH Protocol (False positive)     	| None       	| False (unneeded) 	| CVE-2001-1473 |Production server|<img src="https://cldsi.de/bot/vuln/low.svg" height="30">
| [Dependabot](https://github.com/dependabot)     	| Cross-domain cookie leakage in Guzzle ([guzzlehttp/guzzle](https://github.com/guzzle/guzzle))     	| None       	| True 	| CVE-2022-29248 | FAQ, VeganCheck (API) |<img src="https://cldsi.de/bot/vuln/high.svg" height="30">



## 2021

| Name of Researcher 	| Vulnerability                	| Conformity 	| Fixed 	| CVE |Affected services| Risk level |
|--------------------	|------------------------------	|------------	|-------	|---- |----- |---|
| Intern (pb)         | Log4Shell                     | True        | True    |CVE-2021-45105 | Päd. Back-end| <img src="https://cldsi.de/bot/vuln/high.svg" height="30">
| Gaurang Maheta     	| OpenSSH Username Enumeration 	| None       	| True  	| |Production server|<img src="https://cldsi.de/bot/vuln/medium.svg" height="30">
| Sivan Mujtaba      	| XSS Vulnerability            	| True        | True  	| |customer|<img src="https://cldsi.de/bot/vuln/low.svg" height="30">
| ykl                	| XSS Vulnerability            	| True        | True  	| |customer|<img src="https://cldsi.de/bot/vuln/low.svg" height="30">
| SECFAULT           	| iFrame injection             	| False      	| True  	| |customer|<img src="https://cldsi.de/bot/vuln/medium.svg" height="30">

## 2020

| Name of Researcher 	| Vulnerability                	| Conformity 	| Fixed 	|Affected services| Risk level |
|--------------------	|------------------------------	|------------	|-------	|----- |---|
| No name given     	| Database leakage             	| True       	| True  	|customer| <img src="https://cldsi.de/bot/vuln/high.svg" height="30">
