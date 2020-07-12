texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

#Positive lookbehind

puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

#Negative lookbehind
puts texto.scan(/(?<!super)mercado/i)