import pandas as pd
import json

# 读取CSV文件
df = pd.read_csv('Crime_Data_from_2020_to_Present_20240210.csv')

# 去除重复项（如果存在）
df = df.drop_duplicates(subset=['Crm Cd'])

# 创建映射
crm_cd_to_desc_map = pd.Series(df['Crm Cd Desc'].values,index=df['Crm Cd']).to_dict()

# 将映射保存到JSON文件
with open('crm_cd_to_desc_map.json', 'w') as json_file:
    json.dump(crm_cd_to_desc_map, json_file, ensure_ascii=False, indent=4)

print("映射已成功保存到crm_cd_to_desc_map.json文件中。")
