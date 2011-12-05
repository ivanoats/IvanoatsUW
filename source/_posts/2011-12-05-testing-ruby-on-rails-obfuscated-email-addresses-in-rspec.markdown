---
layout: post
title: "Testing Ruby on Rails Obfuscated Email Addresses with RSpec"
date: 2011-12-05 15:26
comments: true
categories: rspec, email, ruby on rails, testing
---

{% img left /images/nospam.jpg 164 200 %} You may have known that Ruby on Rails can protect email addresses that you have on your web pages with the mail_to helper. But how do you test email obfuscation in your RSpec view tests?

To obfuscate an email address in a rails view, you can simply add encode: "javascript" to your mail_to helper.

{% codeblock obfuscate and protect an email address lang:ruby %}
mail_to "you@example.com","email me", encode: "javascript"
{% endcodeblock %}

To test this, I created a method in my spec/spec_helper.rb file:
{% codeblock email encoder to include in spec_helper.rb lang:ruby %}
  def encode_email(email)
      # copied escape method from:
      #http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-mail_to
    escaped = ""
    email.each_byte { |c| escaped << sprintf("%%%x",c) }
    return escaped
  end
{% endcodeblock %}

Having that method available makes my example very easy to read:
{% codeblock email encoding example lang:ruby %}
it "should obfuscate and display the contact email" do
  render.should have_content(encode_email("contact@example.com"))
end
{% endcodeblock %}

Do you know a better way? For example, hooking directly into the view helper code from [ActionView::Helpers::UrlHelper#mail_to](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-mail_to)? Let me know in the comments.
