# web_camp = "プログラミング学習"
# puts web_camp
# web_camp = "オンラインプログラミング学習"
# puts web_camp

# Web_camp = "DMM_WEB_CAMP"
# puts Web_camp


# name = "A"
# weight = 60
# puts name + "さんの体重は" + weight.to_s + "kgです。"
# puts "#{name}さんの体重は#{weight}kgです。" #変数展開
# puts "#{name}さんの体重は#{weight * 2}kgです。"
# puts '#{name}さんの体重は#{weight}kgです。'


# names = ["Git", "HTML", "CSS"]
# puts names
# puts names[0]

# tall = {"太郎" => 185, "二郎" => 170, "花子" => 155 }
# puts tall["太郎"]


# total = 100
# if total < 200
#   puts "合計は200未満です"
# end

# apple = "Gunma"
# if apple == "Aomori"
#   puts "このりんごは青森県産です"
# elsif apple == "Nagano"
#   puts "このりんごは青森県産ではなく、長野県産です"
# else
#   puts "このりんごは青森県産でも長野県産でもありません"
# end

# orange = "tochigi"
# case orange
#   when "shizuoka" then
#     puts "このオレンジは静岡県産です"
#   when "gunma" then
#     puts "このオレンジは群馬県産です"
#   when "ehime" then
#     puts "このオレンジは愛媛県産です"
#   else
#   puts "このオレンジの産地はわかりません"
# end


# total_price = 120
# if total_price > 100
#   puts "みかんを購入。所持金に余りあり。"
# elsif total_price == 100
#   puts "みかんを購入。所持金は0円。"
# else
#   puts "みかんを購入することができません。"
# end


# puts "何か入力してください"
# input_key = gets
# puts "入力された内容は #{input_key}です"

# dice = 0
# while dice != 6 do
#   dice = rand(1..6)
#   puts dice
# end

# for i in 1..6 do
#   puts i
# end


# fruits = { "りんご" => 3, "ぶどう" => 5, "いちご" => 2, "オレンジ" => 8 }
# fruits.each do |name, amount|
#   puts "#{name}は#{amount}個あります。"
# end


# puts "計算を始めます。"
# puts "何回繰り返しますか？"

# input = gets.to_i
# i = 1
# while i <= input do
#   puts "#{i}回目の計算を開始します。"
#   puts "2つの値を入力してください。"
#   a = gets.to_i
#   b = gets.to_i
#   puts "a=#{a}"
#   puts "b=#{b}"
#   puts "計算結果を出力します"
#   puts "#{a} + #{b} = #{a + b}"
#   puts "#{a} - #{b} = #{a - b}"
#   puts "#{a} * #{b} = #{a * b}"
#   puts "#{a} / #{b} = #{a / b}"

#   i += 1
# end

# puts "計算を終了します。"


# def greeting(name)
#   "Hello, #{name}!"
# end

# puts greeting("Ken")

# def fizz_buzz(number)
#   if number % 15 == 0
#     "FizzBuzz"
#   elsif number % 5 == 0
#     "Buzz"
#   elsif number % 3 == 0
#     "Fizz"
#   else 
#     number.to_s
#   end
# end

# puts "数字を入力してください"

# input = gets.to_i

# puts "結果は..."
# puts fizz_buzz(input)


class Car
  def run(distance)
    puts "車で#{distance}キロ走ります。"
  end
end

class Bus < Car
  def run(distance)
    super
    puts "30人を乗せて、走っています。"
  end
end

class Truck < Car
  def run(distance)
    super
    puts "大きな荷物を乗せて走ります。"
  end
end

truck = Truck.new
truck.run(5)

# bus = Bus.new
# bus.run(5)

# car = Car.new
# car.run(5)

