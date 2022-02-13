###
 # @FilePath: /GS-docs/push.sh
 # @author: Wibus
 # @Date: 2022-02-13 21:15:41
 # @LastEditors: Wibus
 # @LastEditTime: 2022-02-13 21:17:16
 # Coding With IU
### 
COMMIT_MSG='commit'
read -p "commit message: " COMMIT_MSG
git add .
git commit -am "$COMMIT_MSG"
git push
