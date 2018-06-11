# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/bionic64"
  config.vm.hostname = "dev.austintechvideos.com"

  # Support for Parallels provider for Vagrant
  # See: http://parallels.github.io/vagrant-parallels/docs/
  config.vm.provider "parallels" do |v, override|
    v.update_guest_tools = true
    v.memory = 1024

    override.vm.box = "generic/ubuntu1804"
  end

  # Customization for Virtualbox (default provider)
  config.vm.provider "virtualbox" do |vb|
    # Disable ubuntu cloud logs
    vb.customize ["modifyvm", :id, "--uartmode1", "disconnected"]
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    vb.memory = 1024
  end

  if Vagrant.has_plugin?("hostsupdater")
    config.hostsupdater.aliases = ["dev.austintechvideos.com"]
  end

  config.vm.network "private_network", ip: "192.168.33.90"

  config.vm.synced_folder ".", "/var/www/vagrant"
  config.vm.synced_folder ".", "/vagrant"

  config.vm.provision "shell" do |s|
    s.path = "_vagrant/vagrant_deploy.sh"
  end

end
