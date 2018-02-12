# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string
#  email      :string
#  auth_token :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true

  def generate_token
    self.auth_token = Digest::MD5.hexdigest DateTime.current.to_f.to_s
    self.save!
  end
end
