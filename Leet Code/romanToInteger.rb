# @param {String} s
# @return {Integer}
def roman_to_int(s)
  total = 0 # set counter to 

  chars = s.split('')

  chars.each_with_index do | char, i |
    case char
    when "I"
      chars[i + 1] == "V" || chars[i + 1] == "X" ? total -= 1 : total += 1
    when "V"
      total += 5
    when "X"
      chars[i + 1] == "L" || chars[i + 1] == "C" ? total -= 10 : total += 10
    when "L"
      total += 50
    when "C"
      chars[i + 1] == "D" || chars[i + 1] == "M" ? total -= 100 : total += 100
    when "D"
      total += 500
    when "M"
      total += 1000
    end
  end
  return total
end
s = "LVIII"
p roman_to_int(s)

