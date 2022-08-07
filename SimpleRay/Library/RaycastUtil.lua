local TweenService = game:GetService("TweenService")
local Debris = game:GetService("Debris")

local TableUtil = require(script.Parent.Parent.Vendor.RbxUtil.TableUtil)

--[=[
    @class RaycastUtil

    This is the raycast utility.
]=]
local RaycastUtil = {}

function RaycastUtil:Cast(origin: Vector3, direction: Vector3, maxParts: number?, params: table, filter: () -> ()?, visualize: boolean?)
	maxParts = maxParts or 1
	visualize = visualize or false
	
	local parts = {}
	local lastRaycastResult
	local currentRay = 0
	
	local raycastParams = RaycastParams.new()
	raycastParams.FilterType = Enum.RaycastFilterType.Blacklist
	raycastParams.FilterDescendantsInstances = { workspace.Terrain.SimpleRayDebug }
	raycastParams.IgnoreWater = params.IgnoreWater or false
	
	raycastParams.FilterDescendantsInstances = TableUtil.Extend(raycastParams.FilterDescendantsInstances, params.Blacklist)
	
	while task.wait() do
		local raycastResult = workspace:Raycast(origin, direction, raycastParams)
		if raycastResult and raycastResult.Instance then
			raycastParams.FilterDescendantsInstances = TableUtil.Extend(raycastParams.FilterDescendantsInstances, { raycastResult.Instance })
			if not filter(raycastResult.Instance) then
				continue
			end
			lastRaycastResult = raycastResult
			table.insert(parts, {
				Instance = raycastResult.Instance,
				Material = raycastResult.Instance.Material,
				Position = raycastResult.Position,
				Normal = raycastResult.Normal
			})
			currentRay += 1
		else
			break
		end
		if currentRay >= maxParts then
			break
		end
	end
	
	if visualize and lastRaycastResult then
		self:VisualizeRay(origin, lastRaycastResult.Position, 2)
		for i, part in ipairs(parts) do
			self:MarkPart(part.Instance, 2)
		end
	end
	
	return {
		Parts = parts,
		RaycastResult = lastRaycastResult
	}
end

--[=[
    Visualize a ray.

    @param origin Vector3 -- The origin position
    @param position Vector3 -- The end position
    @param time number -- The time the part will stay
    @param color Color3 -- The color of the part
]=]
function RaycastUtil:VisualizeRay(origin: Vector3, position: Vector3, time: number, color: Color3?)
	color = color or Color3.fromRGB(255, 0, 0)
	
	local distance = (origin - position).Magnitude
	
	local function ball(name: string)
		local ball = Instance.new("Part")
		ball.Name = name
		ball.Shape = Enum.PartType.Ball
		ball.Anchored = true
		ball.CanCollide = false
		ball.Color = Color3.fromRGB(129, 0, 0)
		ball.Material = Enum.Material.Neon
		ball.Position = Vector3.new(-6.75, 18.5, -1.34)
		ball.Size = Vector3.new(0.25, 0.25, 0.25)
		
		return ball
	end
	
	local ray = Instance.new("Part")
	ray.Name = "Ray"
	ray.Anchored = true
	ray.CanCollide = false
	ray.Size = Vector3.new(0.1, 0.1, distance)
	ray.CFrame = CFrame.lookAt(position, origin)*CFrame.new(0, 0, -distance/2)
	ray.Color = color
	ray.Transparency = 0.7
	ray.Material = Enum.Material.Neon
	ray.Parent = workspace.Terrain.SimpleRayDebug
	
	local originBall, positionBall = ball("Origin"), ball("Position")
	originBall.Position, positionBall.Position = origin, position
	originBall.Parent, positionBall.Parent = ray, ray
	
	Debris:AddItem(ray, time)
	
	return ray
end

function RaycastUtil:MarkPart(inst: Instance, time: number, color: Color3?)
	color = color or Color3.fromRGB(255, 0, 0)
	
	local highlight = Instance.new("Highlight")
	highlight.Name = "Highlight"
	highlight.DepthMode = Enum.HighlightDepthMode.Occluded
	highlight.OutlineColor = Color3.fromRGB(255, 0, 0)
	highlight.OutlineTransparency = 0.5
	highlight.Adornee = inst
	highlight.Parent = workspace.Terrain.SimpleRayDebug
	Debris:AddItem(highlight, time)
	
	return highlight
end

return RaycastUtil