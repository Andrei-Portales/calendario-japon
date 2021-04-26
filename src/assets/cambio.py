import os
from PIL import Image

def change(path):
    isFile = os.path.isfile(path)
    if isFile:
        if '.jpg' in path:
            print(path)
            im = Image.open(path)
            im.save(f"{path}", optimize=True, quality=10)
        return
    
    arr = os.listdir(path)
    for n in arr:
        change(f'{path}/{n}')

#def ll(carp, inicio, fin):
#    list = '['
#    for n in range(inicio, fin+1):
#        print(f'import cj{n} from \'../assets/calendario_{carp}/cj{n}.jpg\';')
#        list += f'cj{n},'
#    list += '],'
#    print(list)
        
#ll(9, 74, 80)

change('.')
