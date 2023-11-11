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


# class Car
#   def run(distance)
#     puts "車で#{distance}キロ走ります。"
#   end
# end

# class Bus < Car
#   def run(distance)
#     super
#     puts "30人を乗せて、走っています。"
#   end
# end

# class Truck < Car
#   def run(distance)
#     super
#     puts "大きな荷物を乗せて走ります。"
#   end
# end

# truck = Truck.new
# truck.run(5)

# bus = Bus.new
# bus.run(5)

# car = Car.new
# car.run(5)


# === 石取りゲーム ===
# puts "石取りゲームスタート"
# stones = 20
# players = ["あなた", "コンピューター"]

# while stones > 0
#   players.each do |player|
#     puts "残りの石：#{stones}個"
#     if player == "あなた"
#       puts "１〜３個の石を取ってください。"
#       take = gets.to_i
#     else 
#       take = rand(1..3)
#       puts "コンピューターは#{take}個の石を取りました。"
#     end
    
#     stones -= take
    
#     if stones <= 0
#       puts "#{player}の勝ち！"
#       break
#     end
#   end
# end

# ====================
# === じゃんけんゲーム ===

# hand = { 0 => "グー", 1 => "チョキ", 2 => "パー" }

# puts "じゃんけんゲームスタート！"
# puts "0:グー, 1:チョキ, 2:パー"
# print "あなたの手を選んで数字で入力してください"
# player_hand = gets.to_i

# computer_hand = rand(3)
# puts "コンピューターの手は、#{hand[computer_hand]}"

# if player_hand == computer_hand
#   puts "あいこ"
# elsif (player_hand - computer_hand + 3) % 3 == 2
#   puts "あなたの勝ちです"
# else
#   puts "あなたの負けです"
# end

# ==================

def janken
  hand = ["グー", "チョキ", "パー"]

  puts "じゃんけんスタート！"
  puts "グー：[0], チョキ[1], パー[2]"
  print "じゃんけん..."
  your_hand = gets.to_i
  
  if your_hand > 2
    puts "無効な値です"
    return true
  end

  computer_hand = rand(3)
  puts "あなたは、#{hand[your_hand]}"
  puts "コンピューターは、#{hand[computer_hand]}です。"

  if your_hand == computer_hand
    puts "あいこです"
    return true
  elsif (your_hand == 0 && computer_hand == 1) || (your_hand == 1 && computer_hand == 2) || (your_hand == 2 && computer_hand == 0)
    puts "あなたの勝ちです"
    return false
  else
    puts "あなたの負けです"
    return true
  end
end

next_game = true

while next_game
  puts "再挑戦"
  next_game = janken
end

# ===============