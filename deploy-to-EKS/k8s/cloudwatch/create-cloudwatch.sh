ClusterName='kub-dep-demo'
RegionName='ap-northeast-2'

cat create-cloudwatch.yml | sed 's/{{cluster_name}}/'${ClusterName}'/g;s/{{region_name}}/'${RegionName}'/g' | kubectl apply -f -